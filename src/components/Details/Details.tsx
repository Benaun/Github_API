import { Box, Typography } from "@mui/material";
import DetailsCard from "./DetailsCard";
import { useAppSelector } from "../../store/store";
import { IRepo } from "../../interfaces/intefaces";
import styles from './details.module.scss'

export default function Details() {
    const { selectedRepos, items } = useAppSelector(state => state.repos)
    return (
        <Box className={styles.details_container}>
            {selectedRepos == -1
                ? <Box className={styles.details_wrapper}>
                    <Typography variant="body2" fontSize={"14px"}>
                        Выберите репозитарий
                    </Typography>
                </Box>
                : <DetailsCard item={items?.find(item => item.id === selectedRepos) as IRepo} />
            }
        </Box>
    )
}
