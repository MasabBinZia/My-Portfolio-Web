import PageHeader from '@/components/page-header';
import PageLayout from '@/components/page-layout';
import ProjectCard from '@/components/project-card';
import { projects } from '@/data/config';

export default function page() {
  return (
    <PageLayout>
      <PageHeader
        title="Projects"
        desc="Below is a showcase of the projects I have worked on to date."
        link="/"
      />
      <section className="grid gap-2 py-6 md:grid-cols-2 lg:grid-cols-2">
        {projects.Myprojects.map((proj, index) => (
          <ProjectCard
            key={index}
            title={proj.title}
            desc={proj.description}
            icons={proj.stack}
            projLink={proj.link}
            githubLink={proj.github}
            more={`/projects/${proj.slug}`}
          />
        ))}
      </section>
    </PageLayout>
  );
}
