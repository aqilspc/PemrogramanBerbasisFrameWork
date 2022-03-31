import React, { Component } from "react";
import './BlogPost.css';
import Post from "./Post";

class BlogPost extends Component {

    state = {
        dataPenjualan: [],
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/produk')
            .then(Response => Response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    dataPenjualan: jsonHasilAmbilDariAPI
                })
            })
    }
    componentDidMount() {
        this.ambilDataDariServerAPI()
    }


    render() {
        return (
            <div className="post-artikel">

                <h2>Daftar Laptop 2022</h2>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                   
                {
                    this.state.dataPenjualan.reverse().map(produk => {
                        return <Post key={produk.id} harga={produk.harga} img={produk.img} nama={produk.nama_barang} merek={produk.merek}  idP={produk.id} hapusArtikel={this.handleHapusArtikel} />
                    })
                }
                
             </nav>
            </div>
        )
    }

}

export default BlogPost;