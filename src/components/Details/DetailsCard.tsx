import { Stack, Typography, Chip, Box } from "@mui/material";
import { IRepo } from "../../interfaces/intefaces";
import StarIcon from '@mui/icons-material/Star';
import styles from './details.module.scss'

interface IProps {
    item: IRepo
}

export default function DetailsCard({ item }: IProps) {
    return (
        <Box  className={styles.card_container}>
            <Typography fontSize={'32px'}>
                {item.name}
            </Typography>
            <Box className={styles.card_info}>
                {
                    item.language === null ? <div>no</div> :
                        <Chip size="medium" label={item.language} sx={{ color: "#fff", backgroundColor: "#2196F3" }} />
                }
                <Stack display={"flex"} flexDirection={"row"} alignItems={"center"} gap={1} >
                    <StarIcon />
                    {item.stargazers_count}
                </Stack>
            </Box>
            <Typography variant="body2" fontSize={14}>
                {item.license?.name ? item.license?.name : <p>Нет лицензии</p>}
            </Typography>
        </Box>
    )
}