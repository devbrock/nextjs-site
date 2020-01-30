import Layout from '../components/Layout'
import RecentProjects from '../components/RecentProjects'
import Skills from '../components/Skills';


export const index = () => {
    return (
        <>
            <Layout>
                <div className="container">
                    <h1 className="welcome">Hey there! I'm Brock. <br /><span className="yellow">Full Stack Web Developer</span>.</h1>
                    <p className="blurb">Commodo mollit irure exercitation est cupidatat qui commodo ex aliqua duis. Excepteur Lorem aute tempor ut ea do non enim Lorem consequat duis amet et. Nulla cupidatat proident consectetur duis consectetur nisi. Fugiat proident est ex reprehenderit nulla voluptate amet exercitation aliqua esse. Irure deserunt amet occaecat incididunt aliqua commodo. Incididunt ex in aute eu velit nisi.</p>
                </div>
                <Skills />
                <RecentProjects />
            </Layout>
        </>
    );
}

export default index;