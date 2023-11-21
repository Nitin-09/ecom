import Product from "@/models/Product";
import connectDb from "@/midleware/mongoose";

const handler = async (req, res) => {
  try {
    const { slug } = req.query;
    const product = await Product.findOne({slug: slug });
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json({ product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default connectDb(handler);
