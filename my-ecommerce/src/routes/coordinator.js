
export const goToCarrinho = (navigate) =>{ 
    navigate('/carrinho')
} 
export const goToHome = (navigate) =>{ 
    navigate('/')
} 
export const goToCheckout = (navigate) =>{ 
    navigate('/checkout')
}

export const goToDetails = (navigate, id) => {
    navigate(`/details/${id}`)
   
}
