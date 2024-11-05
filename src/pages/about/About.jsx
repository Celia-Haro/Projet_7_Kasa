import picture2 from '/src/assets/images/image2.png'
import aboutList from '/src/assets/data/aboutList.js'
import Collapse from '../../components/collapse/Collapse'
import Banner from '../../components/banner/Banner'


export default function About() {
    return (
        <>
            <Banner picture={picture2} />
            <div>
                {aboutList.map((item, index) => (
                    <Collapse key={index} title={item.title} content={item.content} />
                ))
                }
            </div>
        </>
    )
}
