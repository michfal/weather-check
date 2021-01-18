export function getSearchFormData() {
    
    const searchForm = document.querySelectorAll('.j-search_form input');
     const formData = searchForm[0].value
    // const city = searchForm[1].value
    // console.log(country)
    // console.log(city)
    // const formData = {
    //     country: searchForm[0].value,
    //     city: searchForm[1].value
    // }
    
    // const formData = {
    //     country: searchForm[0].value,
    //     city: searchForm[1].value
    // }
    // console.log(formData)
    return formData
}

