import React, { Component } from 'react';
import NewItems from './NewItems';
import dl from './dulieu.json'
class News extends Component {
    render() {
        return (
            <div>
                {/* begin container */}
<header className="masthead tintuc">
  <div className="container h-100">
    <div className="row h-100">
      <div className="col-lg-12 my-auto">
        <div className="header-content mx-auto">
          <h1 className="mb-1">Trang danh sách tin</h1>
        </div>
      </div>
    </div>
  </div>
</header>
{/* end container */}

                 {/* begin danh sach tin */}
<div className="container">
  <div className="row mt-3">
          {
              dl.map((key,value) => {
                return (
                <NewItems key={value} idNew={key.id} anh={key.anh} 
                tieuDe={key.tieuDe} 
                trichDan={key.trichDan}/>
                );

              })
          }
         
         
  </div>
  
</div>
{/* end danh sach tin */}

            </div>
        );
    }
}

export default News;