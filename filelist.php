<?php

$dir = __DIR__;
$time = time();
// Open a directory, and read its contents
if (is_dir($dir)) {
    if ($dh = opendir($dir)) {
        while (($file = readdir($dh)) !== false) {
            if ($file == 'index.php' || $file == 'filelist.php'
                || pathinfo($file, PATHINFO_EXTENSION) != 'html') {
                continue;
            }
            echo '<a href="'.$file.'?'.$time.'" target="output">'.$file.'<br />';
        }
        closedir($dh);
    }
}
