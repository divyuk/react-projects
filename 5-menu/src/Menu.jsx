import MenuItem from "./MenuItem"
export default function Menu({menus}){

    return(
        <div className="section-center">
        {menus.map((item)=>
            <article className="menu-item">
                <MenuItem {...item}/>
                </article>
                )}
        </div>
    )
}