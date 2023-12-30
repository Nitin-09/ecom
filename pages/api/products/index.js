// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Product from "@/models/Product"
import connectDb from "@/midleware/mongoose"

const handler = async (req, res) => {
    switch (req.method) {
        case 'POST':
            try {
                const products = [];
                // for (let i = 0; i < req.body.length; i++) {
                    // console.log(req.body[i].title) 
                    const productData = req.body;
                    console.log(productData.title)
                    const product = new Product({
                        title: productData.title,
                        slug: productData.title.replaceAll(" ","_"),
                        desc: productData.desc,
                        detail: productData.detail,
                        img: productData.img,
                        category: productData.category,
                        size: productData.size,
                        price: productData.price,
                        availableQty: productData.availableQty,
                    });
                    await product.save();
                    products.push(product);
                // }

                res.status(200).json({ Status: "Products added", products });
            } catch (error) {
                console.error('Error adding product:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
            break;
        case 'GET':
            let products = await Product.find()
            res.status(200).json({ products })
            break;
        case 'PATCH':
            for (let i = 0; i < req.body.length; i++) {
                let p = await Product.findByIdAndUpdate(req.body[i]._id, req.body[i])
            }
            res.status(200).json({ Status: "Product updated" })
            break;
        case 'DELETE':
            for (let i = 0; i < req.body.length; i++) {
                let p = await Product.findByIdAndDelete(req.body[i]._id)
            }
            res.status(200).json({ Status: "Product Deleted" })
            break;
    }
}
export default connectDb(handler)
