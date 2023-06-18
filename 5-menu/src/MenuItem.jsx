export default function MenuItem({title,price,img,URL,desc}){
    const imagePath = '../public/' + img;
    return(
            <>
                <img className="img" src={imagePath} alt={title} />
                <div className="item-info">
                    <header>
                        <h5>{title}</h5>
                        <span className="item-price">{price}</span>
                    </header>
                    <p>{desc}</p>
                </div>
            </>

    )
    
}