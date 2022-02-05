import News from '../modal/news.js';
//api calls 
export const getNews = async (request, response) => {
    // mogodb main call laga kar data fetch karna hai
    try {
        const size = Number(request.query.size);
        const skip = Number(request.query.page);
        let data = await News.find({}).limit(size).skip(size * skip);

        // let data = await News.find({});
        response.status(200).json(data);
    } catch (error) {
        //request jo parameter queries aati hain front end sey
        //response jo hum frontend ko bhejtey hain
        response.status(500).json(error);
    }
}