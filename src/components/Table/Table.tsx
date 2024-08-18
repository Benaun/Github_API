import { Box, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@mui/material'
import './Table.module.scss'
import Row from '../TableRow/TableRow'
import styles from './Table.module.scss'
import Details from '../Details/Details'
import { useAppSelector } from '../../store/store'
import { useState } from 'react'

export default function TableRepos() {
  const { items } = useAppSelector(store => store.repos)
  const [selectedId, setSelectedId] = useState<number>(0);

  return (
    <Box width={"100%"} height={"90%"} padding={'20px'} display={'flex'}>
      {items?.length
        ? <>
          <TableContainer className={styles.table_container}>
            <Typography
              variant='h3'
              className={styles.table_header}
            >
              Результаты поиска
            </Typography>

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
                {items?.map(item =>
                  <Row
                    key={item.id}
                    item={item}
                    selectedId={selectedId}
                    setSelectedId={setSelectedId}
                  />
                )
                }
              </TableBody>
            </Table>

          </TableContainer>
          <Details />
        </>
        : <Box className={styles.main_container}>
          <Typography variant="h3">
            Добро пожаловать
          </Typography>
        </Box>
      }
    </Box>
  )
}