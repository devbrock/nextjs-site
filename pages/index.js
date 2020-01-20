import Layout from '../components/Layout'


export const index = () => {
    return (
        <>
            <Layout>
                <div className="bg-gray-800" style={{ maxWidth: '720px' }}>
                    <h1 className="text-2xl">This is the home page!</h1>
                </div>
            </Layout>
        </>
    );
}

export default index;