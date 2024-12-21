export function formatCurrency(amount: number) {
    return new Intl.NumberFormat('es-CL',{
        style:'currency',
        currency:'CLP'
    }).format(amount)
}

export function getImagePath(imagePath: string) {
    const cloudinaryBaseUrl = 'https://res.cloudinary.com'
    if(imagePath.startsWith(cloudinaryBaseUrl)){
        return imagePath
    }else{
        return `/products/${imagePath}.jpg`
    }
}