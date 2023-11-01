// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Product from "@/models/Product"
import connectDb from "@/midleware/mongoose"

const handler = async (req, res) => {
    switch (req.method) {
        case 'POST':
            for (let i = 0; i < req.body.length; i++) {
                let p = new Product({
                    title: req.body[i].title,
                    slug: req.body[i].slug,
                    desc: req.body[i].desc,
                    detail: req.body[i].detail,
                    img: req.body[i].img,
                    category: req.body[i].category,
                    size: req.body[i].size,
                    price: req.body[i].price,
                    availableQty: req.body[i].availableQty,
                })
                await p.save()
            }
            res.status(200).json({ Status: "Product added" })
            break;
        case 'GET':
            let products = await Product.find()
            res.status(200).json({ products })
            break;
        case 'PATCH':
            for (let i = 0; i < req.body.length; i++) {
                let p = await Product.findByIdAndUpdate(req.body[i]._id,req.body[i])
            }
            res.status(200).json({ Status: "Product updated" })
        case 'DELETE':
            for (let i = 0; i < req.body.length; i++) {
                let p = await Product.findByIdAndDelete(req.body[i]._id)
            }
            res.status(200).json({ Status: "Product Deleted" })
    }
}
export default connectDb(handler)
