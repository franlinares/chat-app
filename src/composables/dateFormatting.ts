
const monthNames: string[] = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
]

export function useDateFormat() {
  function formatDate(dateString: string): string {
    const dateToFormat = new Date(dateString)
    const day = dateToFormat.getDate()
    const month = monthNames[dateToFormat.getMonth()]
    const year = dateToFormat.getFullYear()
    const hours = dateToFormat.getHours()
    const minutes = dateToFormat.getMinutes()
  
    const formattedDate = `${day} ${month} ${year}/${hours}:${minutes}`
  
    return formattedDate
  }

  return {
    formatDate,
  }
}

