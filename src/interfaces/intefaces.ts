export interface IRepo {
    id: number, // id репозитория
    name: string,  // название репозитория
    stargazers_count: number, // колличество звезд
    language: string | null, // основной язык написания
    languages_url: string, // ссылка на все присутствующие языки
    languages: Language[], // список языков
    forks_count: number, // количество форков
    updated_at: string, // дата обновления
    license: null | {
        key: string,
        name: string,
    } // лицензия если есть
}

export interface IReposList {
    items: IRepo[] | null, // список репозиториев
    loading?: boolean, // загрузка
    totalRepos: number, // колличество репозиториев 
    error?: string | null // ошибка
}

export type Language = {
    [key: string] : number
}