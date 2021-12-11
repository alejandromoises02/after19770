import React,{useEffect, useState} from "react";
import useStyles from "./EjercicioAfter.style";

const promisesEjercicio = () => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve([
          { id: 1, destacados: true, nombre: "mango", precio: 200 },
          { id: 2, destacados: true, nombre: "limon", precio: 200 },
          { id: 3, destacados: true, nombre: "manzana", precio: 200 },
          { id: 4, destacados: true, nombre: "tomate", precio: 200 },
          { id: 5, destacados: true, nombre: "pera", precio: 200 },
          { id: 6, destacados: true, nombre: "banana", precio: 200 },
          { id: 7, destacados: true, nombre: "frutilla", precio: 200 }
        ]),
      3000
    );
  });
};

const EjercicioAfter = () => {
    const styles = useStyles()
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    promisesEjercicio().then((data) => {
      const dataFiltrada = data.filter((producto) => producto.destacados);
      setProductos(dataFiltrada);
    });
  }, []);

  return (
    <>
      {productos.length === 0 ? (
        <h1>Cargando...</h1>
      ) : (
        <>
          <ul className={styles.container}>
            {productos.map((producto) => (
              <li className={styles.itemList} key={producto.id}>
                <h3 className={styles.title}>{producto.nombre}</h3>
                <p className={styles.price}>Precio: {producto.precio}</p>
              </li>
            ))}
          </ul>
          <h2>{productos.length}</h2>
        </>
      )}
    </>
  );
};

export default EjercicioAfter;
