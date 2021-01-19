export function getSearchFormData() {
    
    const searchForm = document.querySelectorAll('.j-main_search_form_input');
    const formData = searchForm[0].value
    console.log(formData)
    return formData
}
export function getSearchFormDataWelcome() {
    
    const searchForm = document.querySelectorAll('.j-search_form input');
    const formData = searchForm[0].value
    console.log(formData)
    return formData
}

