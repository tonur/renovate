import { extractPackageFile } from '.';
import { Fixtures } from '~test/fixtures';

describe('modules/manager/terragrunt/extract', () => {
  describe('extractPackageFile()', () => {
    it('returns null for empty', () => {
      expect(extractPackageFile('nothing here')).toBeNull();
    });

    it('extracts terragrunt sources using tfr protocol', () => {
      const res = extractPackageFile(Fixtures.get('1.hcl'));
      expect(res).toEqual({
        deps: [
          {
            currentValue: 'v0.0.9',
            datasource: 'terraform-module',
            depName: 'myuser/myrepo/cloud',
            depType: 'terragrunt',
          },
          {
            currentValue: '1.2.3',
            datasource: 'terraform-module',
            depName: 'terraform-google-modules/kubernetes-engine/google',
            depType: 'terragrunt',
          },
          {
            currentValue: '3.3.0',
            datasource: 'terraform-module',
            depName: 'terraform-aws-modules/vpc/aws',
            depType: 'terragrunt',
          },
          {},
          {
            currentValue: '1.0.0',
            datasource: 'terraform-module',
            depName: 'abc/helloworld/aws',
            depType: 'terragrunt',
            registryUrls: ['https://registry.domain.com'],
          },
        ],
      });
    });

    it('extracts terragrunt sources', () => {
      const res = extractPackageFile(Fixtures.get('2.hcl'));
      expect(res).toEqual({
        deps: [
          {
            currentValue: 'v0.0.9',
            datasource: 'github-tags',
            depName: 'github.com/myuser/myrepo',
            depType: 'github',
            packageName: 'myuser/myrepo',
          },
          {
            currentValue: 'v1.0.0',
            datasource: 'github-tags',
            depName: 'github.com/hashicorp/example',
            depType: 'github',
            packageName: 'hashicorp/example',
          },
          {
            currentValue: 'next',
            datasource: 'github-tags',
            depName: 'github.com/hashicorp/example',
            depType: 'github',
            packageName: 'hashicorp/example',
          },
          {
            currentValue: 'next',
            datasource: 'git-tags',
            depName: '104.196.242.174/example',
            depType: 'gitTags',
            packageName: 'https://104.196.242.174/example',
          },
          {},
          {
            datasource: 'terraform-module',
            depName: 'my.host/modules/test',
            depType: 'terragrunt',
            registryUrls: ['https://my.host'],
          },
          {
            datasource: 'terraform-module',
            depName: 'my.host/modules/test?ref=v1.2.1',
            depType: 'terragrunt',
            registryUrls: ['https://my.host'],
          },
          {},
          {
            datasource: 'terraform-module',
            depName: 'my.host.local/sources/example?ref=v1.2.1',
            depType: 'terragrunt',
            registryUrls: ['https://my.host.local'],
          },
          {},
          {},
          {
            currentValue: 'tfmodule_one-v0.0.9',
            datasource: 'github-tags',
            depName: 'github.com/githubuser/myrepo',
            depType: 'github',
            packageName: 'githubuser/myrepo',
          },
          {
            currentValue: 'v1.0.0',
            datasource: 'github-tags',
            depName: 'github.com/hashicorp/example.2.3',
            depType: 'github',
            packageName: 'hashicorp/example.2.3',
          },
          {
            currentValue: 'v1.0.0',
            datasource: 'github-tags',
            depName: 'github.com/hashicorp/example.2.3',
            depType: 'github',
            packageName: 'hashicorp/example.2.3',
          },
          {
            datasource: 'terraform-module',
            depName: 'hashicorp/consul/aws',
            depType: 'terragrunt',
          },
          {
            currentValue: 'v0.1.0',
            datasource: 'github-tags',
            depName: 'github.com/tieto-cem/terraform-aws-ecs-task-definition',
            depType: 'github',
            packageName: 'tieto-cem/terraform-aws-ecs-task-definition',
          },
          {
            currentValue: 'v0.1.0',
            datasource: 'github-tags',
            depName: 'github.com/tieto-cem/terraform-aws-ecs-task-definition',
            depType: 'github',
            packageName: 'tieto-cem/terraform-aws-ecs-task-definition',
          },
          {
            currentValue: 'v2.0.0',
            datasource: 'github-tags',
            depName: 'github.com/hashicorp/example',
            depType: 'github',
            packageName: 'hashicorp/example',
          },
          {
            datasource: 'terraform-module',
            depName: 'terraform-aws-modules/security-group/aws',
            depType: 'terragrunt',
          },
          {
            datasource: 'terraform-module',
            depName: 'terraform-aws-modules/security-group/aws',
            depType: 'terragrunt',
          },
          {
            skipReason: 'local',
          },
          {
            skipReason: 'no-source',
          },
          {
            currentValue: 'v1.0.0',
            datasource: 'git-tags',
            depName: 'mygit.com/hashicorp/example',
            depType: 'gitTags',
            packageName: 'https://mygit.com/hashicorp/example',
          },
          {
            currentValue: 'v1.0.0',
            datasource: 'git-tags',
            depName: 'mygit.com/hashicorp/example',
            depType: 'gitTags',
            packageName: 'https://mygit.com/hashicorp/example',
          },
          {
            currentValue: 'next',
            datasource: 'git-tags',
            depName: 'mygit.com/hashicorp/example',
            depType: 'gitTags',
            packageName: 'https://mygit.com/hashicorp/example',
          },
          {
            currentValue: 'v1.0.1',
            datasource: 'git-tags',
            depName: 'mygit.com/hashicorp/example',
            depType: 'gitTags',
            packageName: 'https://mygit.com/hashicorp/example',
          },
          {
            currentValue: 'v1.0.2',
            datasource: 'git-tags',
            depName: 'mygit.com/hashicorp/example',
            depType: 'gitTags',
            packageName: 'http://mygit.com/hashicorp/example',
          },
          {
            currentValue: 'v1.0.3',
            datasource: 'git-tags',
            depName: 'mygit.com/hashicorp/example',
            depType: 'gitTags',
            packageName: 'ssh://git@mygit.com/hashicorp/example',
          },
          {
            skipReason: 'no-source',
          },
          {
            skipReason: 'no-source',
          },
          {
            currentValue: 'v1.0.0',
            datasource: 'bitbucket-tags',
            depName: 'bitbucket.com/hashicorp/example',
            depType: 'gitTags',
            packageName: 'hashicorp/example',
            registryUrls: ['https://bitbucket.com'],
          },
          {
            currentValue: 'v1.0.0',
            datasource: 'gitlab-tags',
            depName: 'gitlab.com/hashicorp/example',
            depType: 'gitTags',
            packageName: 'hashicorp/example',
            registryUrls: ['https://gitlab.com'],
          },
          {
            currentValue: 'v1.0.1',
            datasource: 'gitlab-tags',
            depName: 'gitlab.com/hashicorp/example',
            depType: 'gitTags',
            packageName: 'hashicorp/example',
            registryUrls: ['https://gitlab.com:4321'],
          },
          {
            currentValue: 'v1.0.2',
            datasource: 'gitlab-tags',
            depName: 'gitlab.com/hashicorp/example',
            depType: 'gitTags',
            packageName: 'hashicorp/example',
            registryUrls: ['https://gitlab.com'],
          },
          {
            currentValue: 'v1.0.0',
            datasource: 'gitea-tags',
            depName: 'gitea.com/hashicorp/example',
            depType: 'gitTags',
            packageName: 'hashicorp/example',
            registryUrls: ['https://gitea.com'],
          },
          {
            currentValue: 'v1.0.0',
            datasource: 'git-tags',
            depName: 'bitbucket.example.com/hashicorp/example',
            depType: 'gitTags',
            packageName: 'https://bitbucket.example.com/hashicorp/example',
          },
        ],
      });
      expect(res?.deps).toHaveLength(36);
      expect(res?.deps.filter((dep) => dep.skipReason)).toHaveLength(4);
    });

    it('extracts terragrunt sources with depth specified after the branch', () => {
      const res = extractPackageFile(Fixtures.get('3.hcl'));
      expect(res).toEqual({
        deps: [
          {
            currentValue: 'v0.0.9',
            datasource: 'github-tags',
            depName: 'github.com/myuser/myrepo',
            depType: 'github',
            packageName: 'myuser/myrepo',
          },
          {
            currentValue: 'v1.0.0',
            datasource: 'github-tags',
            depName: 'github.com/hashicorp/example',
            depType: 'github',
            packageName: 'hashicorp/example',
          },
          {
            currentValue: 'next',
            datasource: 'github-tags',
            depName: 'github.com/hashicorp/example',
            depType: 'github',
            packageName: 'hashicorp/example',
          },
          {
            currentValue: 'next',
            datasource: 'git-tags',
            depName: '104.196.242.174/example',
            depType: 'gitTags',
            packageName: 'https://104.196.242.174/example',
          },
          {},
          {
            datasource: 'terraform-module',
            depName: 'my.host/modules/test',
            depType: 'terragrunt',
            registryUrls: ['https://my.host'],
          },
          {
            datasource: 'terraform-module',
            depName: 'my.host/modules/test?ref=v1.2.1&depth=1',
            depType: 'terragrunt',
            registryUrls: ['https://my.host'],
          },
          {},
          {
            datasource: 'terraform-module',
            depName: 'my.host.local/sources/example?ref=v1.2.1&depth=1',
            depType: 'terragrunt',
            registryUrls: ['https://my.host.local'],
          },
          {},
          {},
          {
            currentValue: 'tfmodule_one-v0.0.9',
            datasource: 'github-tags',
            depName: 'github.com/githubuser/myrepo',
            depType: 'github',
            packageName: 'githubuser/myrepo',
          },
          {
            currentValue: 'v1.0.0',
            datasource: 'github-tags',
            depName: 'github.com/hashicorp/example.2.3',
            depType: 'github',
            packageName: 'hashicorp/example.2.3',
          },
          {
            currentValue: 'v1.0.0',
            datasource: 'github-tags',
            depName: 'github.com/hashicorp/example.2.3',
            depType: 'github',
            packageName: 'hashicorp/example.2.3',
          },
          {
            datasource: 'terraform-module',
            depName: 'hashicorp/consul/aws',
            depType: 'terragrunt',
          },
          {
            currentValue: 'v0.1.0',
            datasource: 'github-tags',
            depName: 'github.com/tieto-cem/terraform-aws-ecs-task-definition',
            depType: 'github',
            packageName: 'tieto-cem/terraform-aws-ecs-task-definition',
          },
          {
            currentValue: 'v0.1.0',
            datasource: 'github-tags',
            depName: 'github.com/tieto-cem/terraform-aws-ecs-task-definition',
            depType: 'github',
            packageName: 'tieto-cem/terraform-aws-ecs-task-definition',
          },
          {
            currentValue: 'v2.0.0',
            datasource: 'github-tags',
            depName: 'github.com/hashicorp/example',
            depType: 'github',
            packageName: 'hashicorp/example',
          },
          {
            datasource: 'terraform-module',
            depName: 'terraform-aws-modules/security-group/aws',
            depType: 'terragrunt',
          },
          {
            datasource: 'terraform-module',
            depName: 'terraform-aws-modules/security-group/aws',
            depType: 'terragrunt',
          },
          {
            skipReason: 'local',
          },
          {
            skipReason: 'no-source',
          },
          {
            currentValue: 'v1.0.0',
            datasource: 'git-tags',
            depName: 'mygit.com/hashicorp/example',
            depType: 'gitTags',
            packageName: 'https://mygit.com/hashicorp/example',
          },
          {
            currentValue: 'v1.0.0',
            datasource: 'git-tags',
            depName: 'mygit.com/hashicorp/example',
            depType: 'gitTags',
            packageName: 'https://mygit.com/hashicorp/example',
          },
          {
            currentValue: 'next',
            datasource: 'git-tags',
            depName: 'mygit.com/hashicorp/example',
            depType: 'gitTags',
            packageName: 'https://mygit.com/hashicorp/example',
          },
          {
            currentValue: 'v1.0.1',
            datasource: 'git-tags',
            depName: 'mygit.com/hashicorp/example',
            depType: 'gitTags',
            packageName: 'https://mygit.com/hashicorp/example',
          },
          {
            currentValue: 'v1.0.2',
            datasource: 'git-tags',
            depName: 'mygit.com/hashicorp/example',
            depType: 'gitTags',
            packageName: 'http://mygit.com/hashicorp/example',
          },
          {
            currentValue: 'v1.0.3',
            datasource: 'git-tags',
            depName: 'mygit.com/hashicorp/example',
            depType: 'gitTags',
            packageName: 'ssh://git@mygit.com/hashicorp/example',
          },
          {
            currentValue: 'v1.0.4',
            datasource: 'git-tags',
            depName: 'mygit.com/hashicorp/example',
            depType: 'gitTags',
            packageName: 'ssh://git@mygit.com/hashicorp/example',
          },
          {
            skipReason: 'no-source',
          },
          {
            skipReason: 'no-source',
          },
          {
            currentValue: 'v1.0.0',
            datasource: 'bitbucket-tags',
            depName: 'bitbucket.com/hashicorp/example',
            depType: 'gitTags',
            packageName: 'hashicorp/example',
            registryUrls: ['https://bitbucket.com'],
          },
          {
            currentValue: 'v1.0.0',
            datasource: 'gitlab-tags',
            depName: 'gitlab.com/hashicorp/example',
            depType: 'gitTags',
            packageName: 'hashicorp/example',
            registryUrls: ['https://gitlab.com'],
          },
          {
            currentValue: 'v1.0.1',
            datasource: 'gitlab-tags',
            depName: 'gitlab.com/hashicorp/example',
            depType: 'gitTags',
            packageName: 'hashicorp/example',
            registryUrls: ['https://gitlab.com:4321'],
          },
          {
            currentValue: 'v1.0.2',
            datasource: 'gitlab-tags',
            depName: 'gitlab.com/hashicorp/example',
            depType: 'gitTags',
            packageName: 'hashicorp/example',
            registryUrls: ['https://gitlab.com'],
          },
          {
            currentValue: 'v1.0.0',
            datasource: 'gitea-tags',
            depName: 'gitea.com/hashicorp/example',
            depType: 'gitTags',
            packageName: 'hashicorp/example',
            registryUrls: ['https://gitea.com'],
          },
        ],
      });
      expect(res?.deps).toHaveLength(36);
      expect(res?.deps.filter((dep) => dep.skipReason)).toHaveLength(4);
    });

    it('extracts terragrunt sources with depth specified before the branch', () => {
      const res = extractPackageFile(Fixtures.get('4.hcl'));
      expect(res).toEqual({
        deps: [
          {
            currentValue: 'v0.0.9',
            datasource: 'github-tags',
            depName: 'github.com/myuser/myrepo',
            depType: 'github',
            packageName: 'myuser/myrepo',
          },
          {
            currentValue: 'v1.0.0',
            datasource: 'github-tags',
            depName: 'github.com/hashicorp/example',
            depType: 'github',
            packageName: 'hashicorp/example',
          },
          {
            currentValue: 'next',
            datasource: 'github-tags',
            depName: 'github.com/hashicorp/example',
            depType: 'github',
            packageName: 'hashicorp/example',
          },
          {
            currentValue: 'next',
            datasource: 'git-tags',
            depName: '104.196.242.174/example',
            depType: 'gitTags',
            packageName: 'https://104.196.242.174/example',
          },
          {},
          {
            datasource: 'terraform-module',
            depName: 'my.host/modules/test',
            depType: 'terragrunt',
            registryUrls: ['https://my.host'],
          },
          {
            datasource: 'terraform-module',
            depName: 'my.host/modules/test?depth=1&ref=v1.2.1',
            depType: 'terragrunt',
            registryUrls: ['https://my.host'],
          },
          {},
          {
            datasource: 'terraform-module',
            depName: 'my.host.local/sources/example?depth=1&ref=v1.2.1',
            depType: 'terragrunt',
            registryUrls: ['https://my.host.local'],
          },
          {},
          {},
          {
            currentValue: 'tfmodule_one-v0.0.9',
            datasource: 'github-tags',
            depName: 'github.com/githubuser/myrepo',
            depType: 'github',
            packageName: 'githubuser/myrepo',
          },
          {
            currentValue: 'v1.0.0',
            datasource: 'github-tags',
            depName: 'github.com/hashicorp/example.2.3',
            depType: 'github',
            packageName: 'hashicorp/example.2.3',
          },
          {
            currentValue: 'v1.0.0',
            datasource: 'github-tags',
            depName: 'github.com/hashicorp/example.2.3',
            depType: 'github',
            packageName: 'hashicorp/example.2.3',
          },
          {
            datasource: 'terraform-module',
            depName: 'hashicorp/consul/aws',
            depType: 'terragrunt',
          },
          {
            currentValue: 'v0.1.0',
            datasource: 'github-tags',
            depName: 'github.com/tieto-cem/terraform-aws-ecs-task-definition',
            depType: 'github',
            packageName: 'tieto-cem/terraform-aws-ecs-task-definition',
          },
          {
            currentValue: 'v0.1.0',
            datasource: 'github-tags',
            depName: 'github.com/tieto-cem/terraform-aws-ecs-task-definition',
            depType: 'github',
            packageName: 'tieto-cem/terraform-aws-ecs-task-definition',
          },
          {
            currentValue: 'v2.0.0',
            datasource: 'github-tags',
            depName: 'github.com/hashicorp/example',
            depType: 'github',
            packageName: 'hashicorp/example',
          },
          {
            datasource: 'terraform-module',
            depName: 'terraform-aws-modules/security-group/aws',
            depType: 'terragrunt',
          },
          {
            datasource: 'terraform-module',
            depName: 'terraform-aws-modules/security-group/aws',
            depType: 'terragrunt',
          },
          {
            skipReason: 'local',
          },
          {
            skipReason: 'no-source',
          },
          {
            currentValue: 'v1.0.0',
            datasource: 'git-tags',
            depName: 'mygit.com/hashicorp/example',
            depType: 'gitTags',
            packageName: 'https://mygit.com/hashicorp/example',
          },
          {
            currentValue: 'v1.0.0',
            datasource: 'git-tags',
            depName: 'mygit.com/hashicorp/example',
            depType: 'gitTags',
            packageName: 'https://mygit.com/hashicorp/example',
          },
          {
            currentValue: 'next',
            datasource: 'git-tags',
            depName: 'mygit.com/hashicorp/example',
            depType: 'gitTags',
            packageName: 'https://mygit.com/hashicorp/example',
          },
          {
            currentValue: 'v1.0.1',
            datasource: 'git-tags',
            depName: 'mygit.com/hashicorp/example',
            depType: 'gitTags',
            packageName: 'https://mygit.com/hashicorp/example',
          },
          {
            currentValue: 'v1.0.2',
            datasource: 'git-tags',
            depName: 'mygit.com/hashicorp/example',
            depType: 'gitTags',
            packageName: 'http://mygit.com/hashicorp/example',
          },
          {
            currentValue: 'v1.0.3',
            datasource: 'git-tags',
            depName: 'mygit.com/hashicorp/example',
            depType: 'gitTags',
            packageName: 'ssh://git@mygit.com/hashicorp/example',
          },
          {
            skipReason: 'no-source',
          },
          {
            skipReason: 'no-source',
          },
          {
            currentValue: 'v1.0.0',
            datasource: 'bitbucket-tags',
            depName: 'bitbucket.com/hashicorp/example',
            depType: 'gitTags',
            packageName: 'hashicorp/example',
            registryUrls: ['https://bitbucket.com'],
          },
          {
            currentValue: 'v1.0.0',
            datasource: 'gitlab-tags',
            depName: 'gitlab.com/hashicorp/example',
            depType: 'gitTags',
            packageName: 'hashicorp/example',
            registryUrls: ['https://gitlab.com'],
          },
          {
            currentValue: 'v1.0.1',
            datasource: 'gitlab-tags',
            depName: 'gitlab.com/hashicorp/example',
            depType: 'gitTags',
            packageName: 'hashicorp/example',
            registryUrls: ['https://gitlab.com:4321'],
          },
          {
            currentValue: 'v1.0.2',
            datasource: 'gitlab-tags',
            depName: 'gitlab.com/hashicorp/example',
            depType: 'gitTags',
            packageName: 'hashicorp/example',
            registryUrls: ['https://gitlab.com'],
          },
          {
            currentValue: 'v1.0.0',
            datasource: 'gitea-tags',
            depName: 'gitea.com/hashicorp/example',
            depType: 'gitTags',
            packageName: 'hashicorp/example',
            registryUrls: ['https://gitea.com'],
          },
        ],
      });
      expect(res?.deps).toHaveLength(35);
      expect(res?.deps.filter((dep) => dep.skipReason)).toHaveLength(4);
    });

    it('returns null if only local terragrunt deps', () => {
      expect(
        extractPackageFile(`terragrunt {
        source = "../fe"
      }
      `),
      ).toBeNull();
    });

    it('returns empty deps if only local terragrunt includes', () => {
      expect(
        extractPackageFile(`include "root" {
        path = find_in_parent_folders("root.hcl")
      }
      `),
      ).toStrictEqual({ deps: [] });
    });
  });
});
