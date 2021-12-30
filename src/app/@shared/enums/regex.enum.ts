export enum RegexCommon {
  ExpRegOnlyCaracterFilters = '^[a-zA-Z0-9áéíóúñÑÁÉÍÓÚ%][a-zA-Z0-9áéíóúñÑÁÉÍÓÚ%;\s ]{0,48}[a-zA-Z0-9áéíóúñÑÁÉÍÓÚ%]$',
  ExpRegOnlyCaracterNumber50 = '^[a-zA-Z0-9áéíóúñÑÁÉÍÓÚ][a-zA-Z0-9áéíóúñÑÁÉÍÓÚ\s ]{0,48}[a-zA-Z0-9áéíóúñÑÁÉÍÓÚ]$',
  ExpRegOnlyCaracterNumber100 = '^[a-zA-Z0-9áéíóúñÑÁÉÍÓÚ][a-zA-Z0-9áéíóúñÑÁÉÍÓÚ\s ]{0,98}[a-zA-Z0-9áéíóúñÑÁÉÍÓÚ]$',
  ExpRegOnlyCaracterNumber200 = '^[a-zA-Z0-9áéíóúñÑÁÉÍÓÚ][a-zA-Z0-9áéíóúñÑÁÉÍÓÚ\s ]{0,198}[a-zA-Z0-9áéíóúñÑÁÉÍÓÚ]$',
  ExpRegOnlyEmail  = '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$',
  ExpRegOnlyNumber = '^[0-9]+$',
  ExpRegOnlyCaracter = '^([a-zA-Z]+)( [a-zA-Z]+)*$'

}
