import Container from "../ui/Container"


function Project({id, title, img}) {
    if(img === 'bg') {
        return (
            <div className="img-box-bg" id={id}>
                <h3 className="img-title-bg">{title}</h3>
            </div>
        )
    }
    return (
        <div className="img-box">
            <h3 className="img-title">{title}</h3>
            <img src={`/img/${img}`} alt="Some House" />
        </div>
    )
}
function Projects(props) {
    return (
    <section className="projects">
        <Container>
            <h2 className="section-title">Projects</h2>
            <br />
            <div className="row1">
                {props.list.map((hObj) => (
                    <Project key={hObj.id} id={hObj.id} title={hObj.title} img={hObj.img} />
                ))}
            {/* <div className='img-box-bg' id='h1'>
            <h3 className='img-title-bg'>Some House</h3>
          </div>
          <div className='img-box-bg' id='h2'>
            <h3 className='img-title-bg'>Some House</h3>
          </div>
          <div className='img-box-bg' id='h3'>
            <h3 className='img-title-bg'>Some House</h3>
          </div>
          <div className='img-box-bg' id='h4'>
            <h3 className='img-title-bg'>Some Mantion</h3>
          </div> */}
            </div>
        </Container>
    </section>
    )
}
export default Projects