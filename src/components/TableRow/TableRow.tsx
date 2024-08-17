import { TableCell, TableRow } from '@mui/material'
import './TableRow.module.scss'
import { IRepo } from '../../interfaces/intefaces'
import { formateDate } from '../../assets/formate-data'

interface IProps {
    item: IRepo
}

export default function Row({ item }: IProps) {
    return (
        <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.language}</TableCell>
            <TableCell>{item.forks_count}</TableCell>
            <TableCell>{item.stargazers_count}</TableCell>
            <TableCell>{formateDate(item.updated_at)}</TableCell>
        </TableRow>
    )
}