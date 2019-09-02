import React from 'react';
import '../components/Product.css'
class Product extends React.Component {

//  isStatus = (status)=>{
//    if(status === true){
//      return <div className="hot">HOT</div>;
//    }
  
//  }
//không có tham số truyền vào thì {this.isStatus} không cần (), nếu có tham số truyền vào thì cần phải {this.isStatus()}
  constructor(props) {
    super(props);
    this.state = {
      showStatus: false
    }
    this.onShowEdit = this.onShowEdit.bind(this);
    this.onShowSave = this.onShowSave.bind(this);
    this.renderOnClick = this.renderOnClick.bind(this);
    this.showDelete = this.showDelete.bind(this);
  }
    
isStatus(){
    if(this.props.status === true)
    return <div className="hot">HOT</div>;
  }
  //format price
  format_curency = (price)=> {
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }

  //button edit
  showEdit = () =>{
    this.setState({
      showStatus: true
    })
  }
  //button save
  showSave = () =>{
    this.setState({
      showStatus: false
    })
    this.props.edit(this.props.index, this.textName.value);
  }
  //button delete
  showDelete = () =>{
    this.props.delete(this.props.index);
  }
    //render edit
    onShowEdit = ()=>{
      return <div className="col-sm-11 col-md-11 m-auto p-0">
              <div className="btn-group">
              <input type="text" defaultValue={this.props.children} ref={(input)=> {this.textName = input}}/>
            <button type="button" className="btn btn-primary d-block mx-auto my-2" onClick={this.showSave}>Save</button>
            </div>
          </div>
    }
  //render save
  onShowSave = ()=>{
    return <div className="btn-group">
    <button type="button" className="btn btn-danger" onClick={this.showEdit}>Edit</button>
    <button type="button" className="btn btn-primary ml-2" onClick={this.showDelete}>Remove</button>
  </div>
  }
  renderOnClick = ()=>{
    if(this.state.showStatus === false){
      return this.onShowSave();
    }
    else return this.onShowEdit();
  }
  onAddComponents = ()=>{
    this.props.onAddComponent(this.props.index);
  }
  
  render() {
    const styles={fontSize: '1.5rem'}
    const {children,price} = this.props;
    return (
      <div className="col-sm-12 col-md-6 col-lg-6 mt-5">
        <div className="product-list">
          <div className="row">
            <div className="col-sm-12 col-md-5 col-lg-5 product-left">
              <div className="product-img">
                <img alt ="girl "src="https://sohanews.sohacdn.com/thumb_w/660/2017/photo-4-1509012560460-0-0-409-660-crop-1509012656515.jpg" />
                {this.isStatus()}
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="card-body">
                <h5 className="card-title">
                  <a className="card-name" href="a.html">{children}</a>
                  <a className="card-detail" href="a.html" ><span>Product Ceogaty</span></a>
                </h5>
                <h3 className="price">{this.format_curency(price)} VND</h3>
                <h5 className="card-text">Some quick example text to build</h5>
                <button type="button" href="#" className="btn btn-danger">Add to cart</button>
                <button type="button" className="btn btn-primary ml-2" data-toggle="modal" data-target="#exampleModal">
                More info
        </button>
        <button className="btn btn-success mt-2" style={styles} onClick={this.onAddComponents}>Add Components</button>

        <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
              Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page.
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
                <div className="rate-star">
                  Rating:&nbsp;
                      <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-half-o" />
                  <i className="fa fa-star-half-o" />
                </div>
              </div>
            </div>
            {this.renderOnClick()}
          </div>
        </div>
       
      </div>
      


    );
  }

}

export default Product;
