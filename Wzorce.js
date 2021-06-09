/*Obserwator

<CustomInput
  labelText="Manufacturer"
  id="manufacturer"
  formControlProps={{
    fullWidth: true,
  }}
  required
  labelProps={{
    shrink: car.manufacturer ? true : false,
  }}
  inputProps={{
    onChange: handleChange, // zaimplementowany wzorzec obserwatora, który przy każdej zmianie pola danych uruchamia funkcję handleChange
    value: car.manufacturer,
  }}
/>;

const handleChange = (event) => {
  const name = event.target.id;
  setCar({
    ...car,
    [name]: event.target.value,
  });
};

*/

/*Singleton

const [car, setCar] = useState({ idCar: 0 }); // we farmework React useState jest hookiem, który pozwala korzystać ze stanu w komponencie funkcyjnym. Stan zapisywany jest w jednym obiekcie - singletonie.

*/

/*Mediator

if (car.idCar != 0) {
    await api.request(API_TYPES.CAR).update(car.id, car);
  } else {
    await api.request(API_TYPES.CAR).create("/", car);
  }             // wycinek z metody, która sprawdza, czy samochód został zaktualizowany 

  <CustomInput
  labelText="Manufacturer"
  id="manufacturer"
  formControlProps={{
    fullWidth: true,
  }}
  required
  labelProps={{
    shrink: car.manufacturer ? true : false,
  }}
  inputProps={{
    onChange: handleChange,
    value: car.manufacturer,
  }}
/>;             // pole wyboru pojazdu - producenta


  <Button color="primary" onClick={SendData}>
  Update Info
</Button>       // przycisk update 

<Modal
open={open}
onChange={handleClose}
txt={"OK"}
title={"Auto wynajęte"}
/>              // modal wyświetlający informację o wynajęciu pojazdu

*/

/*FluentApi

await api.request(API_TYPES.SPENDINGS).fetchUserCars("/" + props.match.params.id).toString();  // Obiekt do połączenia api zwraca różne metody, które można łączyć ze sobą w łancuch wielu metod

*/

