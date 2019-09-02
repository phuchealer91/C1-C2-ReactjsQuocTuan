import React from 'react';
import './App.css';
import Product from './components/Product';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Products: [
        {name: "Iphone XXS Max 1",price: 100000,isStatus: true},
        {name: "Iphone XXS 2",price: 2000000,isStatus: true},
        {name: "Iphone XXS 3",price: 250000,isStatus: false},
        {name: "Iphone XXX",price: 222200,isStatus: true},
        {name: "Iphone XSS Max",price: 500000,isStatus: false},
        {name: "Iphone XXS Max",price: 9900000,isStatus: true},
        {name: "Iphone XXS Max",price: 800000,isStatus: false}
      ]
    }
    this.deleteProduct = this.deleteProduct.bind(this);
    this.editNameProduct = this.editNameProduct.bind(this);
    // this.onAddComponents = this.onAddComponents.bind(this);
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
    const {Products}= this.state;
    let arrProduct = this.state.Products; 
  this.setState({
    Products: [
      ...Products,
      {name:arrProduct[id].name,price: arrProduct[id].price,isStatus: arrProduct[id].isStatus}
      
    ]
  })
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
        >{item.name}
        </Product>
      })
      // const styles={
      //   fontSize: '1.5rem'
      // }
    return (
        <div className="container mt-5">
          {/* <button className="btn btn-success" style={styles} onClick={this.onAddComponents}>Add Components</button> */}
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
