import './Banner.css';

export default function Banner({logo,title,children}){  //children in case menu items or nav elements will be added
    return(
     <header>
         <img
             src={logo}
             alt="sextant logo"/>
         <h1>{title}</h1>
         {children}
     </header>
    );
}