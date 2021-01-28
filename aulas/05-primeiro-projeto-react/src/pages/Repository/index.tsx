import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'
import { Header, RepositoryInfo, Issues } from './styles'

interface RepositoryParams {
  repository: string
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>()

  return (
    <>
      <Header>
        <img src={logoImg} alt="github explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
        Voltar
      </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://avatars.githubusercontent.com/u/6579736?s=460&u=64eb8fc12ef135fdbccaace93551f58b6d9ffe31&v=4"
            alt="Roberto Guerra"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>description</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>1808</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>1808</strong>
            <span>Issues abertas</span>
          </li>

        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to={`/repositories`}>
          <div>
            <strong>asd</strong>
            <p>asdasd</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
}

export default Repository;