import Product from "@/models/Product";
import connectDb from "@/midleware/mongoose";

const handler = async (req, res) => {
    try {
        const fourMonthsAgo = new Date();
        fourMonthsAgo.setMonth(fourMonthsAgo.getMonth() - 4);
    
        const recentProducts = await Product.find({
          addedDate: { $gte: fourMonthsAgo },
        });
    
        res.json(recentProducts);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
};

export default connectDb(handler);
