//main image array


export class photo {
    constructor(src, id, date, category, alt){
        this.src = src;
        this.id = id;
        this.date = date;
        this.category = category;
        this.alt = alt;
        this.description = ""; 
    }
    addDescription(description){
        this.description = description;
    }
    display(){
        return (
            <div className="containerGallery">
            <h3>{this.date}</h3>
            <img src={this.src} id={this.id} alt={this.alt}/>
            <p>{this.description}</p>
            </div>
        );
   }

}
