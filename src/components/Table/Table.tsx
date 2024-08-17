import { Box, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import './Table.module.scss'
import { useAppSelector } from '../../store/store'
import Row from '../TableRow/TableRow'
import styles from './Table.module.scss'

export default function TableRepos() {

  const { items, error } = useAppSelector(state => state.repos)

  return (
    <Box width={"100%"} height={"100%"} padding={'20px'}>
      <TableContainer className={styles.table_container}>
        <Table stickyHeader size='small'>
          <TableHead>
            <TableRow>
              <TableCell>Название</TableCell>
              <TableCell>Язык</TableCell>
              <TableCell>Число форков</TableCell>
              <TableCell>Число звезд</TableCell>
              <TableCell>Дата обновления</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!error && <>
                {items?.map(item => {
                  return <Row item={item} />
                })
                }
              </>
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
