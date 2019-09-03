import React from 'react';
import './App.css';
import Product from './components/Product';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Products: [
        {name: "Iphone XXS Max 1",price: 100000,
        image: 'https://sohanews.sohacdn.com/thumb_w/660/2017/photo-4-1509012560460-0-0-409-660-crop-1509012656515.jpg',isStatus: true},
        {name: "Iphone XXS 2",price: 2000000,
        image: 'https://sohanews.sohacdn.com/thumb_w/660/2017/photo-4-1509012560460-0-0-409-660-crop-1509012656515.jpg',isStatus: true},
        {name: "Iphone XXS 3",price: 250000,
        image: 'https://sohanews.sohacdn.com/thumb_w/660/2017/photo-4-1509012560460-0-0-409-660-crop-1509012656515.jpg',isStatus: false},
        {name: "Iphone XXX",price: 222200,
        image: 'https://sohanews.sohacdn.com/thumb_w/660/2017/photo-4-1509012560460-0-0-409-660-crop-1509012656515.jpg',isStatus: true},
        {name: "Iphone XSS Max",price: 500000,
        image:'https://sohanews.sohacdn.com/thumb_w/660/2017/photo-4-1509012560460-0-0-409-660-crop-1509012656515.jpg',isStatus: false},
        {name: "Iphone XXS Max",price: 9900000,
        image:'https://sohanews.sohacdn.com/thumb_w/660/2017/photo-4-1509012560460-0-0-409-660-crop-1509012656515.jpg',isStatus: true},
        {name: "Iphone XXS Max",price: 800000,
        image:'https://sohanews.sohacdn.com/thumb_w/660/2017/photo-4-1509012560460-0-0-409-660-crop-1509012656515.jpg',isStatus: false}
      ],
      showAdd: false
    }
    this.deleteProduct = this.deleteProduct.bind(this);
    this.editNameProduct = this.editNameProduct.bind(this);
    this.onAddItemss = this.onAddItemss.bind(this);
    this.renderOnClicks = this.renderOnClicks.bind(this);
    
  }
  deleteProduct(id){
    let arrProduct = this.state.Products;// lay mang cai obj
    arrProduct.splice(id,1);
    this.setState({
      Products: arrProduct
    })
  }
  editNameProduct(id,name){
    let arrProduct = this.state.Products; // lay mang cai obj
    arrProduct[id].name = name; 
    //arrProduct[id] lay tung cai obj .name de lay name tu obj con gan name la name nay cua input khi truyen vao
    this.setState({
      Products: arrProduct
    })
  }
  //add components
  onAddComponent(id){
    const {Products} = this.state;
    let arrProduct = this.state.Products; 
    this.setState({
    Products: [
      ...Products,
      {
        name:arrProduct[id].name,
        price: arrProduct[id].price,
        image: arrProduct[id].image,
        isStatus: arrProduct[id].isStatus
      }
    ]
  })
  }

// phan showadd
   showadd = () =>{
    this.setState({
      showAdd: true
    })
  }
  //button save
  showsave = () =>{
    this.setState({
      showAdd: false
    })
  }

  //render save
onAddNewSave = ()=>{
  return <div className="btn-group">
  <button type="button" className="btn btn-danger" onClick={this.showadd}>Add</button>
</div>
}
renderOnClicks = ()=>{
  if(this.state.showAdd === false){
    return this.onAddNewSave();
  }
  else return this.onAddNewItem();
}
onAddNewItem = () => {
  // const styles = {
  //   fontSize: '1.5rem'
  // }
  return <div className="col-sm-12 col-md-6 m-auto p-0">
    <div className="btn-group">
      <form onSubmit={this.onAddItemss}>
        
        <label>Name</label>
        <input type="text"  
        ref={(node)=> {this.text = node}} 
        //  value={this.state.newItem}
        />

        <label>Price</label>
        <input type="text"  
        ref={(node)=> {this.text2 = node}} 
        //  value={this.state.newItem}
        />

        <label>Image</label>
        <input type="text" 
        ref={(node)=> {this.text3 = node}} 
        //  value={this.state.newItem}
        />

        <label>Status : (true/false)</label>
        <input type="text"  
        ref={(node)=> {this.text4 = node}} 
        />
        {/* <select style={styles} className="mt-2">
        <option value="true" ref={(node)=> {this.text4 = node}}>true</option>
        <option value="false" ref={(node)=> {this.text5 = node}}>false</option>     
      </select> */}

        <input type="submit" className="btn btn-danger mt-5"  value="Submit"/>      
        <input type="button" className="btn btn-success mt-2"  value="Back" onClick={this.showsave}/>      
        {/* <button type="button" className="btn btn-primary" >Save</button> */}
      </form>
  </div>
</div>
}
  onAddItemss =(event)=>{
    // if(event.keyCode === 13){
      event.preventDefault();
      let k1 = this.text.value;
      let k2 = this.text2.value;
      let k3 = this.text3.value;
      let k4 = this.text4.value;
      if(!(k1 && k2 && k3 && k4).trim()){
        return;
      }
     
      const {Products}= this.state;
      // let arrProduct = this.state.Products; 
    this.setState({
      Products: [
        {
          name:this.text.value,
          price: this.text2.value,
          image:this.text3.value, 
          isStatus: this.text4.value === "true" ? true : false
        },
        ...Products
      ]
    })
    console.log(typeof this.text4.value)
    //reset form
      this.text.value = " ";
      this.text2.value = " ";
      this.text3.value = " ";
      this.text4.value = " ";
     }
  
  render(){
      let elements = this.state.Products.map((item,index)=>{
        return <Product
          key={index}
          index={index}
          price={item.price}
          status={item.isStatus}
          delete={(id)=>this.deleteProduct(id)}
          edit={(id,name)=>this.editNameProduct(id,name)}
          onAddComponent={(id)=>this.onAddComponent(id)}
          image={item.image}
        >{item.name}
        </Product>
      })
    
    return (
        <div className="container mt-5">
        <span>https://kenhbaomoi.com/wp-content/uploads/2019/08/66825153693564047737228789764809466455186n-1565702278422722967375.jpg</span>
          {this.renderOnClicks()}
          {/* <button className="btn btn-success" style={styles} onClick={this.onAddNewItem}>Add Components</button> */}
        <div className="product-item">
          <div className="row ">
          {elements}
      </div>
      </div>
      </div>
    );
  }
  
}

export default App;
