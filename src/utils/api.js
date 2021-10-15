import axios from 'axios';

export const getToken=()=>{
  return `Bearer ${localStorage.getItem('token')}`
}


export const obtenerProductos = async (setProductos, setEjecutarConsulta) => {
  const options = { method: 'GET', url: 'http://localhost:5000/Productos',
  headers: {Authorization: getToken(), }};
  await axios
    .request(options)
    .then(function (response) {
      setProductos(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  setEjecutarConsulta(false);
};

// export const obtenerVentas = async (setVentas, setEjecutarConsulta) => {
//   const options = { method: 'GET', url: 'http://localhost:5000/Ventas',
//   headers: {
//     Authorization: getToken(),
//  } };
//   await axios
//     .request(options)
//     .then(function (response) {
//       setVentas(response.data);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
//   setEjecutarConsulta(false);
export const obtenerProductosV = async (successCallback, errorCallback) => {
  const options = { method: 'GET', url: 'http://localhost:5000/Productos/',
  headers: {
    Authorization: getToken(),
 } };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

//export const obtenerVentas = async (successCallback, errorCallback) => {
//  const options = { method: 'GET', url: 'http://localhost:5000/Ventas/',
//  headers: {
//    Authorization: getToken(),
// } };
 //// await axios.request(options).then(successCallback).catch(errorCallback);
//};



export const obtenerVentas = async (setVentas, setEjecutarConsulta, successCallback, errorCallback) => {
  const options = { method: 'GET', url: 'http://localhost:5000/Ventas',
  headers: {Authorization: getToken(), }};
  await axios
    .request(options)
    .then(function (response) {
      setVentas(response.data);
      
    })
    .catch(function (error) {
      console.error(error);
    
    });
  setEjecutarConsulta(false);
};
//export const obtenerVentas = async (setVentas, setEjecutarConsulta) => {
 // const options = { method: 'GET', url: 'http://localhost:5000/Ventas' };
 // await axios
 //   .request(options)
 //   .then(function (response) {
 //     setVentas(response.data);
 //   })
  //  .catch(function (error) {
  //    console.error(error);
  //  });
 // setEjecutarConsulta(false);
//};



// CRUD DE VENTAS

export const crearVenta = async (data, successCallback, errorCallback) => {
  const options = {
    method: 'POST',
    url: 'http://localhost:5000/Ventas/Nuevo',
    headers: { 'Content-Type': 'application/json', Authorization: getToken(),  },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};


// CRUD PARA USUARIOS

export const obtenerUsuariosV = async (successCallback, errorCallback) => {
  const options = { method: 'GET', url: 'http://localhost:5000/Usuarios',
  headers: {
    Authorization: getToken(),
 } };
  await axios.request(options).then(successCallback).catch(errorCallback);
};



// get PARA USUARIOS
export const obtenerUsuarios = async (setUsuarios, setEjecutarConsulta) => {
  const options = { method: 'GET', url: 'http://localhost:5000/usuarios',
  headers: {
     Authorization: getToken(),
  } };
  await axios
    .request(options)
    .then(function (response) {
      setUsuarios(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  setEjecutarConsulta(false);
};




