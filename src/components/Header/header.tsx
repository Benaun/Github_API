import { Button, IconButton, Input, InputAdornment } from "@mui/material";
import { useState } from "react";
import { useAppDispatch } from "../../store/store";
import { clearAll, fetchRepos } from "../../store/repoSlice";
import styles from "./header.module.scss"

export default function Header() {
    const dispatch = useAppDispatch()
    const [serachValue, setSearchValue] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchValue(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        dispatch(fetchRepos(serachValue))
    }

    const handleClear = () => {
        dispatch(clearAll())
        setSearchValue('')
    }

    return (
        <header className={styles.header}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <Input
                    className={styles.input}
                    placeholder="Введите поисковый запрос"
                    value={serachValue}
                    onChange={handleChange}
                    endAdornment={serachValue 
                        ? <InputAdornment position="end">
                            <IconButton onClick={handleClear} className={styles.clear_btn}>
                                x
                            </IconButton>
                        </InputAdornment>
                        : ""
                    }
                />

                <Button
                    variant="contained"
                    className={styles.btn}
                    type="submit"
                    disabled={!serachValue}
                >
                    Искать
                </Button>
            </form>
        </header>
    )
}