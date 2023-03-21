import './index.css'

const About = () => {
  console.log()
  return (
    <div className="about-container">
      <img
        className="about-image "
        src="https://assets.ccbp.in/frontend/react-js/about-blog-img.png "
        alt="about"
      />
      <h1 className="about-heading">About</h1>
      <p className="paragraph">I love to create!I am a frontend developer</p>
    </div>
  )
}

export default About
