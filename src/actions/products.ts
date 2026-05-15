"use server";

import { createSupabaseServerClient } from "@/lib/supabase-server";
import { revalidatePath } from "next/cache";

export async function createProduct(formData: FormData) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return { error: "You must be logged in to create a product." };
  }

  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const price = parseFloat(formData.get("price") as string);
  const category = formData.get("category") as string;
  const demoUrl = formData.get("demoUrl") as string;
  
  const thumbnailFile = formData.get("thumbnail") as File;
  const assetFile = formData.get("asset") as File;

  try {
    // 1. Upload Thumbnail
    let thumbnailUrl = "";
    if (thumbnailFile && thumbnailFile.size > 0) {
      const { data: thumbData, error: thumbError } = await supabase.storage
        .from("product-images")
        .upload(`${user.id}/${Date.now()}-${thumbnailFile.name}`, thumbnailFile);
      
      if (thumbError) throw thumbError;
      thumbnailUrl = supabase.storage.from("product-images").getPublicUrl(thumbData.path).data.publicUrl;
    }

    // 2. Upload Asset
    let assetUrl = "";
    if (assetFile && assetFile.size > 0) {
      const { data: assetData, error: assetError } = await supabase.storage
        .from("product-assets")
        .upload(`${user.id}/${Date.now()}-${assetFile.name}`, assetFile);
      
      if (assetError) throw assetError;
      assetUrl = supabase.storage.from("product-assets").getPublicUrl(assetData.path).data.publicUrl;
    }

    // 3. Insert Product into Database
    const slug = title
      .toLowerCase()
      .replace(/[^\w ]+/g, "")
      .replace(/ +/g, "-") + "-" + Math.random().toString(36).substring(2, 7);

    const { error: dbError } = await supabase
      .from("products")
      .insert({
        user_id: user.id,
        title,
        slug,
        description,
        price,
        category,
        thumbnail_url: thumbnailUrl,
        asset_url: assetUrl,
        demo_url: demoUrl,
      });

    if (dbError) throw dbError;

    revalidatePath("/dashboard");
    return { success: true };
  } catch (error: any) {
    console.error("Error creating product:", error);
    return { error: error.message || "An unexpected error occurred." };
  }
}
