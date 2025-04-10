import {
  GridProps,
  SimpleGrid,
  Skeleton,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react'
import { Stats } from 'models'
import React from 'react'

const computeCompletionRate  = (
  totalCompleted: number,
  totalStarts: number
): string => {
  if (totalStarts === 0) return 'Not available'
  return `${Math.round((totalCompleted / totalStarts) * 100)}%`
}

export const StatsCards = ({
  stats,
  ...props
}: { stats?: Stats } & GridProps) => {
  const bg = useColorModeValue('white', 'gray.900')

  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing="6" {...props}>
      <Stat bgColor={bg} p="4" rounded="md" boxShadow="md">
        <StatLabel>Views</StatLabel>
        {stats ? (
          <StatNumber>{stats.totalViews}</StatNumber>
        ) : (
          <Skeleton w="50%" h="10px" mt="2" />
        )}
      </Stat>
      <Stat bgColor={bg} p="4" rounded="md" boxShadow="md">
        <StatLabel>Starts</StatLabel>
        {stats ? (
          <StatNumber>{stats.totalStarts}</StatNumber>
        ) : (
          <Skeleton w="50%" h="10px" mt="2" />
        )}
      </Stat>
      <Stat bgColor={bg} p="4" rounded="md" boxShadow="md">
        <StatLabel>Completion rate</StatLabel>
        {stats ? (
          <StatNumber>
            {computeCompletionRate(stats.totalCompleted, stats.totalStarts)}
          </StatNumber>
        ) : (
          <Skeleton w="50%" h="10px" mt="2" />
        )}
      </Stat>
    </SimpleGrid>
  )
}
