import { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import alertify from 'alertifyjs';


export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {

    const [employees, setEmployees] = useState([
        { id: uuidv4(), name: 'Ahmet Yılmaz', email: 'ahmet.yilmaz@gmail.com', address: 'Tevfikpaşa Sokak Kadıköy/İstanbul', phone: '0552 542 6921', info: "Şirketimizde 1 yıldır çalışmaktadır", avatar: "", age: "12-04-1994", departmant: "FrontEnd Developer" },
        { id: uuidv4(), name: 'Didem Çelik', email: 'didem.celik@gmail.com', address: 'Cengiz Topel Sokak Kadıköy/İstanbul', phone: '0554 532 3519', info: "Şirketimizde 2 yıldır çalışmaktadır", avatar: "", age: "10-06-1992", departmant: "FrontEnd Developer" },
        { id: uuidv4(), name: 'Melike Tunçbilek', email: 'melike.tuncbilek@gmail.com', address: 'Kızılarık Mahallesi Kepez/Antalya', phone: '0532 736 2595', info: "Şirketimizde 4 yıldır çalışmaktadır", avatar: "", age: "28-01-1989", departmant: "BackEnd Developer" },
        { id: uuidv4(), name: 'Fırat Uygun', email: 'fırat.uygun@gmail.com', address: 'Pınarbaşı Mahallesi Konyaaltı/Antalya', phone: '0544 668 1548', info: "Şirketimizde 8 yıldır çalışmaktadır", avatar: "", age: "19-06-1984", departmant: "Graphic Designer" },
        { id: uuidv4(), name: 'Mehmet Can Yıkılmaz', email: 'mcanyikilmaz@gmail.com', address: 'Ağabey Sokak Kadıköy/İstanbul', phone: '0533 551 2642', info: "Şirketimizde 18 yıldır çalışmaktadır", avatar: "", age: "22-12-1984", departmant: "Project Manager" },
        { id: uuidv4(), name: 'Metin Kurt', email: 'metinkurt@gmail.com', address: 'Tevfikpaşa Sokak Kadıköy/İstanbul', phone: '0533 435 2342', info: "Şirketimizde 13 yıldır çalışmaktadır", avatar: "", age: "18-08-1883", departmant: "Project Manager" },
        { id: uuidv4(), name: 'Tülin Demir', email: 'tülin.demir@gmail.com', address: 'Ağabey Sokak Kadıköy/İstanbul', phone: '0533 551 2642', info: "Şirketimizde 2 yıldır çalışmaktadır", avatar: "", age: "11-03-1885", departmant: "BackEnd Developer" },
        { id: uuidv4(), name: 'Ferhat Ogün Ilgaz', email: 'f.ogünilgaz@gmail.com', address: 'Lara Mahallesi Muratpaşa/İstanbul', phone: '0533 551 2642', info: "Şirketimizde 3 yıldır çalışmaktadır", avatar: "", age: "07-12-1995", departmant: "FrontEnd Developer" },
        { id: uuidv4(), name: 'Zehra Ülker', email: 'zehraülker@gmail.com', address: 'Yediveren Mahallesi Serik / Antalya', phone: '0523 445 3452', info: "Şirketimizde 2 aydır stajyer olarak görev yapmaktadır.", avatar: "", age: "13-03-1999", departmant: "Intern" }
    ]);

    useEffect(() => {
        const employees = localStorage.getItem("employees")
        setEmployees(JSON.parse(employees))
    }, [])

    useEffect(() => {
        localStorage.setItem('employees', JSON.stringify(employees));
    });

    const sortedEmployees = employees.sort((a, b) => (a.name < b.name ? -1 : 1))

    const addEmployee = (name, email, address, phone, info, avatar, age, departmant) => {
        setEmployees([...employees, {
            id: uuidv4(), name, email, address, phone, info, avatar, age, departmant
        }])
    }

    const deleteEmployee = (id) => {
        setEmployees(employees.filter(employee => employee.id !== id));
        alertify.error("Employee is succesfully deleted.", 4);
    }

    const updateEmployee = (id, updatedEmployee) => {
        setEmployees(employees.map((employee) => (employee.id === id ? updatedEmployee : employee)))
    }


    const searchEmployee = (e) => {
        console.log(e.target.value);
    }

    return (
        <EmployeeContext.Provider value={{ sortedEmployees, addEmployee, deleteEmployee, updateEmployee, searchEmployee }}>
            {props.children}
        </EmployeeContext.Provider>
    )
}

export default EmployeeContextProvider;


