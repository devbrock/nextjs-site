import Layout from '../components/Layout'
import RecentProjects from '../components/RecentProjects'
import Skills from '../components/Skills';



export const index = () => {
    return (
        <>
            <Layout>
                <div className="block">
                    <div className="container">
                        <div className="split-child">
                            <h1 className="welcome blue-dark">Hey there! I'm Brock. <br /><span className="blue">Full Stack Web Developer.</span></h1>
                            <ul id="socials">
                                <li>
                                    <a className="gray" href="https://github.com/devbrock" target="_blank">Github</a>
                                </li>
                                <li>
                                    <a className="gray" href="https://github.com/devbrock" target="_blank">Resume</a>
                                </li>
                                <li>
                                    <a className="gray" href="https://github.com/devbrock" target="_blank">Email</a>
                                </li>
                                <li>
                                    <a className="gray" href="https://www.youtube.com/channel/UC4ZpS3jR2yvCiQ6ddu1sKAA" target="_blank">Youtube</a>
                                </li>
                            </ul>
                        </div>
                        <div className="split-child red-dark">
                            <p>Elit commodo tempor eiusmod excepteur ea eiusmod cupidatat aliquip. Irure qui tempor incididunt non magna non sit anim aliqua eu pariatur cupidatat qui. Commodo laborum id ut deserunt Lorem. Consectetur aliquip enim occaecat reprehenderit dolore eu quis tempor aliquip culpa ut. Enim consectetur do ullamco velit ex ex eiusmod quis anim ad. Lorem eu aliqua cupidatat officia nisi culpa culpa consequat ea reprehenderit aliquip id quis labore.</p>
                        </div>
                    </div>
                </div>
                <div className="block">
                    <div className="container cover-image">
                    </div>
                </div>
                <div className="block">
                    <div className="container">
                        <h2>My Skills</h2>
                    </div>
                    <div className="container">
                        <Skills />
                    </div>
                </div>
                <div className="block">
                    <div className="container">
                        <h2>Recent Projects</h2>
                    </div>
                    <div className="container">
                        <RecentProjects />
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default index;

