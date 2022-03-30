import React from "react";

const Post = (props) => {
    return(
        <div className="artikel">
            <div className="gambar-artikel">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="Gambar Thumbnail Profile Mahasiswa"/>
            </div>
            <div className="konten-artikel">
                 <div className="judul-artikel">Nim : {props.nim}</div>
                 <div className="judul-artikel">Nama : {props.nama}</div>
                 <div className="judul-artikel">Hp : {props.hp}</div>
                 <div className="judul-artikel">Angkatan : {props.angkatan}</div>
                 <p className="isi-artikel">Alamat : {props.alamat}</p>
                 <div className="judul-artikel">Status : {props.status}</div>
                 <button className="btn btn-sm btn-warning" onClick={() => props.hapusMahasiswa(props.id)}>Hapus</button>
            </div>
        </div>
     )
}
export default Post;