import { TableCell, TableRow } from '@mui/material'
import './TableRow.module.scss'
import { IRepo } from '../../interfaces/intefaces'
import { formateDate } from '../../assets/formate-data'
import { useAppDispatch } from '../../store/store'
import { selectItem } from '../../store/repoSlice'

interface IProps {
    item: IRepo,
    selectedId: number,
    setSelectedId: React.Dispatch<React.SetStateAction<number>>,
}

export default function Row({ item, selectedId, setSelectedId }: IProps) {
    const dispatch = useAppDispatch()
    return (
        <TableRow key={item.id}
            onClick={() => {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                setSelectedId(item.id); dispatch(selectItem(item.id))
            }}
            selected={item.id === selectedId}
        >
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.language ? item.language : 'Нет'}</TableCell>
            <TableCell>{item.forks_count}</TableCell>
            <TableCell>{item.stargazers_count}</TableCell>
            <TableCell>{formateDate(item.updated_at)}</TableCell>
        </TableRow>
    )
}