import React, {Component} from "react";
import './MahasiswaPost.css';
import Post from "../../component/MahasiswaPost/Post";

class MahasiswaPost extends Component{
    state = {
        listmahasiswa:[],
        insertMahasiswa: {
           id: 1,
           nim: "",
           nama: "",
           alamat: "",
           hp: "",
           angkatan: "",
           status:""
        }
    }
    ambilDataDariServerAPI = () => {
        fetch(`http://localhost:3001/mahasiswa`)
        .then(response => response.json())
        .then(jsonHasilAmbilDariAPI =>{
            this.setState({
                listmahasiswa: jsonHasilAmbilDariAPI
            })
        })
        
    }
    componentDidMount() {
        this.ambilDataDariServerAPI()
    }
    handleHapusMahasiswa = (data) => {
        fetch(`http://localhost:3001/mahasiswa/${data}`, {method: 'DELETE'})
            .then(res => { 
                this.ambilDataDariServerAPI()
            })
    }
    handleTambahMahasiswa = (event) =>{
        let formInsertMahasiswa = {...this.state.insertMahasiswa};
        let timestamp = new Date().getTime();
        formInsertMahasiswa['id'] = timestamp;
        formInsertMahasiswa[event.target.name] = event.target.value;
        this.setState({
            insertMahasiswa: formInsertMahasiswa
        })
    }
    handleTombolSimpan = () => {
        fetch('http://localhost:3001/mahasiswa', {
            method:'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertMahasiswa)
        })

            .then( (response ) => {
                this.ambilDataDariServerAPI();
                document.getElementById("formMhs").reset();
            });
    }
    render() {
       return(
           <div className="post-artikel">
                <form id="formMhs">
               <div className="form pb-2 border-button">
                   <div className="form-group row">
                       <label htmlFor="nim" className="col-sm-2 col-form-label">Nim</label>
                       <div className="col-sm">
                            <input type="text" className="form-control" id="nim" name="nim" onChange={this.handleTambahMahasiswa}/>
                       </div>
                   </div>
                   <div className="form-group row">
                       <label htmlFor="nama" className="col-sm-2 col-form-label">Nama</label>
                       <div className="col-sm">
                            <input type="text" className="form-control" id="nama" name="nama" onChange={this.handleTambahMahasiswa}/>
                       </div>
                   </div>
                   <div className="form-group row">
                       <label htmlFor="alamat" className="col-sm-2 col-form-label">Alamat</label>
                       <div className="col-sm-10">
                           <textarea className="form-control" id="alamat" name="alamat" rows="3" onChange={this.handleTambahMahasiswa}></textarea>
                       </div>
                   </div>
                   <div className="form-group row">
                       <label htmlFor="hp" className="col-sm-2 col-form-label">Hp</label>
                       <div className="col-sm">
                            <input type="text" className="form-control" id="hp" name="hp" onChange={this.handleTambahMahasiswa}/>
                       </div>
                   </div>
                   <div className="form-group row">
                       <label htmlFor="angkatan" className="col-sm-2 col-form-label">Angkatan</label>
                       <div className="col-sm">
                            <input type="text" className="form-control" id="angkatan" name="angkatan" onChange={this.handleTambahMahasiswa}/>
                       </div>
                   </div>
                   <div className="form-group row">
                       <label htmlFor="status" className="col-sm-2 col-form-label">Status</label>
                       <div className="col-sm">
                            <select className="form-control" id="status" name="status" onChange={this.handleTambahMahasiswa}>
                                <option value="0">Pilih Status</option>
                                <option value="aktif">Aktif</option>
                                <option value="lulus">Lulus</option>
                                <option value="cuti">Cuti</option>
                            </select>
                       </div>
                   </div>
                   <button type="button" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
               </div>
               </form>
               <h2>Daftar Mahasiswa</h2>
               {
                   this.state.listmahasiswa.map(mahasiswa =>{
                       return <Post 
                       nim={mahasiswa.nim} nama={mahasiswa.nama} alamat={mahasiswa.alamat} hp={mahasiswa.hp}
                       angkatan={mahasiswa.angkatan} status={mahasiswa.status}
                       id={mahasiswa.id}
                       hapusMahasiswa={this.handleHapusMahasiswa}/>
                   })
               }
           </div>

       )
    }
}

export default MahasiswaPost;