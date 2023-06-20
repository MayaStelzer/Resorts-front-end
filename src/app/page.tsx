import Image from 'next/image'
import Card from '../../components/cards'
import "./styles.css"

export default function Home() {
  return (
    <>
    <header className="hero">
            <div id="navbar" className="navbar">
               <h1 className="logo">
                   <span className="text-primary">Gnar</span>Guide
               </h1>
               <nav>
                   <ul>
                       <li>
                           <i className="fa-solid fa-magnifying-glass"></i>
                           <a href="#home"></a>
                           <input type="text" name="" id="search"/>
                       </li>
                   </ul>
               </nav>
           </div>
    
                <div className="content">
                    <h1>Maya's Awesome Skiing Site</h1>
                    <span>Maya's Awesome Skiing Site</span>
                </div>
        </header>
        <section id="home-articles" className="py-2">
            <div className="container">
            <div className="articles-container">
              <Card imageUrl = "/quenten-janssen-W_z4awYQgO4-unsplash.jpg" title = "Palisades Tahoe Review" createDate = "May 26, 2023" content = "Last weekend (5/20/23-5/21/23), I went on a family ski trip to Palisades, Tahoe. Our group was composed of two skiers and one snowboarder. The quality of the snow was typical for spring, heavy and slushy due to the elevated temperatures (in the mid 70s and sunny). Because of the..."/>
              <Card imageUrl = "/quenten-janssen-W_z4awYQgO4-unsplash.jpg" title = "Types of Skis" createDate = "June 12, 2023" content = "There are many ways to achieve the sensation of sliding down a snowy mountain. Have you tried one (or more) of these? 1. Powder skis: Pow days are the element for these powder hounds. Their wide waist width (107 mm on average) allows the skier to more flotation on the loose snow. Some wider..."/>
          
            </div>
            </div>
        </section>  
      </>
  )
}
