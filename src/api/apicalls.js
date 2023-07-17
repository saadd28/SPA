import axios from "axios";

export async function LoginApiCall(login) {
    console.log('login', login);
    let route = `https://api-spa.dsmeglobal.com/graphql`;
    const graphqlQuery = {
        query: `
        mutation($login: LoginVMInput!){
            login(model: $login){
              error_code,
              message,
              result {
                id,
                phone_number,
                name,
                branch {
                  id,
                  name
                }
              }
            }
          }
    `,
        variables: login,
    };
    // let response = null;
    return (axios({
        url: route,
        method: 'POST',
        data: graphqlQuery,
    }));
}


export async function GetBookingsApiCall(bookings) {
    console.log('getbookings', bookings);
    let route = `https://api-spa.dsmeglobal.com/graphql`;
    const graphqlQuery = {
        query: `
        query($getbookings: GetBookingsVMInput!){
            getBookings (model: $getbookings) {
              error_code,
              message,
              result {
                id,
                created_on,
                customer_name,
                customer_phone,
                customer_image,
                payment_status_id,
                net_price,
                booking_type_id,
                vat,
                discount,
                price,
                booking_details{
                  id,
                  service_name,
                  employee_name,
                  start_datetime,
                  end_datetime,
                  price
          
                }
          
              }
              
            }
          }
    `,
        variables: bookings,
    };
    // let response = null;
    return (axios({
        url: route,
        method: 'POST',
        data: graphqlQuery,
    }));
}




