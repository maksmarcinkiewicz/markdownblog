import Layout from "../components/Layout";
import Header from "../components/Header";
import dataScienceSVG from '../utils/wave-data-svgrepo-com.svg'

export default function technologies() {


    return (
        <>
            <Header/>
            <Layout>
                <div className="flex flex-col">
                    <h2 className="mb-4 text-2xl font-normal">My technical skills include</h2>

                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
                            <div
                                className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">

                            </div>

                            <div className="ml-4">
                                <h2 className="font-semibold">Data Science</h2>
                                <p className="mt-2 text-sm text-gray-500">data cleaning, exploration, and visualization,
                                    statistical modeling (Python, R, Tableau)</p>
                            </div>
                        </div>

                        <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
                            <div
                                className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-100 bg-orange-50">
                            </div>
                            <div className="ml-4">
                                <h2 className="font-semibold">Machine Learning</h2>
                                <p className="mt-2 text-sm text-gray-500">building predictive models, feature selection,
                                    model selection, unsupervised learning (Python)</p>
                            </div>
                        </div>
                        <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
                            <div
                                className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
                            </div>

                            <div className="ml-4">
                                <h2 className="font-semibold">Deep Learning</h2>
                                <p className="mt-2 text-sm text-gray-500">understanding of the deep learning theory, basics of PyTorch</p>
                            </div>
                        </div>

                        <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
                            <div
                                className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-100 bg-orange-50">
                            </div>
                            <div className="ml-4">
                                <h2 className="font-semibold">Relational Databases</h2>
                                <p className="mt-2 text-sm text-gray-500">understanding of the deep learning theory, basics of PyTorch</p>
                            </div>
                        </div>

                    </div>
                </div>
            </Layout>
        </>
    )
}