export default function BtnContainer({jobs, currentItem, setCurrentItem }){
    return (
        <div className="btn-container">
          
          {jobs.map((item, index) => (
            <button key={item.id}
              onClick={() => setCurrentItem(index)}
              className={
                index === currentItem ? "job-btn active-btn" : "job-btn"
              }
            >
              {item.company}
            </button>
          ))}
        </div>
      );
      

}