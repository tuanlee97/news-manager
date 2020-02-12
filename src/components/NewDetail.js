import React, { Component } from 'react';
import dl from './dulieu.json';
import NewRelated from './NewRelated';

class NewDetail extends Component {

    render() {

      var dem = 1;
        return (
            <div>
            {/* begin container */}
            <header className="masthead tintuc">
              <div className="container h-100">
                <div className="row h-100">
                  <div className="col-lg-12 my-auto">
                    <div className="header-content mx-auto">
                      <h1 className="mb-5">Chi Tiết Tin</h1>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            {/* end container */}
            {/* begin chi tiet tin */}
            {
              dl.map((key) => {   
                if(key.id === parseInt(this.props.match.params.id))
                return (
                  <div className="jumbotron jumbotron-fluid" key={key}>
              <div className="container">
                <img src={key.anh} className="img-fluid" alt="" />
              <h1 className="display-3">{key.tieuDe}</h1>
                <p className="lead">{key.trichDan}</p>
                <hr className="my-2" />
                {key.noiDung}
              </div>
            </div>  
                )
                return true;
              }
              )
            }
            
            <div className="container">
              <h4 className="card-title text-center">Tin liên quan</h4>
              <div className="row">
                <div className="col-12">
                  <div className="card-deck">
                  {
                    dl.map((key,value)=> {
                      if(key.id !== parseInt(this.props.match.params.id) )
                        if(dem <=4){
                          dem ++ ;
                      return (
                        <NewRelated key={value} idNew={key.id} anh={key.anh} 
                tieuDe={key.tieuDe} 
                trichDan={key.trichDan}/>
                      )
                      }
                      return true;
                    }
                    )

                        }
                
                 
                  
                  </div>
                </div>
              </div><hr />
            </div>
            {/* end chi tiet tin */}
          </div>
          
        );
    }
}

export default NewDetail;