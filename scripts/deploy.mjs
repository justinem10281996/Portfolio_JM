import { publish } from 'gh-pages';

// Windows caps a single command line at 32,767 characters. This site ships ~370
// screenshot files, and gh-pages' "Removing files" step runs `git rm` with every
// existing path as a separate argument. Those paths total ~33k characters, so the
// spawn fails with ENAMETOOLONG.
//
// `remove` is a glob evaluated inside the temp checkout. Pointing it at a pattern
// that cannot match yields an empty file list, which makes gh-pages skip the
// `git rm` step entirely. Staging still runs `git add .`, so the real build
// output is committed and pushed as normal.
publish(
  'build',
  {
    remove: '__skip_rm__/**',
    message: `Updates: ${new Date().toISOString()}`,
  },
  (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log('Deployed build/ to the gh-pages branch.');
  }
);