/**
 * Enumeration of icon file names, and what extensions they map to.
 * Please keep items alphabetical. Items without extensions may require specific logic in the code to map.
 * Track icon accuracy status here: https://msft-my.spoppe.com/personal/caperez_microsoft_com/Documents/Missing%20List.xlsx?web=1
 */
export const FileTypeIconMap: { [key: string]: { extensions?: string[] } } = {
  'accdb': { extensions: ['accdb', 'mdb'] },
  'archive': { extensions: ['7z', 'ace', 'arc', 'arj', 'dmg', 'gz', 'iso', 'lzh', 'pkg', 'rar', 'sit', 'tgz', 'tar', 'z'] },
  'audio': {
    extensions: [
      'aif', 'aiff', 'aac', 'amr', 'au', 'awb', 'dct', 'dss', 'dvf', 'flac', 'gsm', 'm4a', 'm4p',
      'mid', 'mmf', 'mp3', 'ogg', 'oga', 'ra', 'rm', 'wav', 'wma', 'wv'
    ]
  },
  'code': {
    extensions: [
      'abap', 'ada', 'adp', 'ahk', 'as', 'as3', 'asc', 'ascx', 'asm', 'asp', 'awk', 'bash', 'bash_login',
      'bash_logout', 'bash_profile', 'bashrc', 'bat', 'bib', 'bsh', 'build', 'builder', 'c', 'c++',
      'capfile', 'cc', 'cfc', 'cfm', 'cfml', 'cl', 'clj', 'cls', 'cmake', 'cmd', 'coffee', 'config',
      'cpp', 'cpt', 'cpy', 'cs', 'cshtml', 'cson', 'csproj', 'css', 'ctp', 'cxx', 'd', 'ddl', 'di',
      'disco', 'dml', 'dtd', 'dtml', 'el', 'emakefile', 'erb', 'erl', 'f', 'f90', 'f95', 'fs', 'fsi',
      'fsscript', 'fsx', 'gemfile', 'gemspec', 'gitconfig', 'go', 'groovy', 'gvy', 'Hcp', 'h', 'h++',
      'haml', 'handlebars', 'hbs', 'hh', 'hpp', 'hrl', 'hs', 'htc', 'hxx', 'idl', 'iim', 'inc', 'inf',
      'ini', 'inl', 'ipp', 'irbrc', 'jade', 'jav', 'java', 'js', 'json', 'jsp', 'jsx', 'l', 'less',
      'lhs', 'lisp', 'log', 'lst', 'ltx', 'lua', 'm', 'make', 'manifest', 'master', 'md', 'markdn',
      'markdown', 'mdown', 'mkdn', 'ml', 'mli', 'mll', 'mly', 'mm', 'mud', 'nfo', 'opml', 'osascript',
      'p', 'pas', 'patch', 'php', 'php2', 'php3', 'php4', 'php5', 'phtml', 'pl', 'pm', 'pod', 'pp',
      'profile', 'ps1', 'pss', 'pt', 'py', 'pyw', 'r', 'rake', 'rb', 'rbx', 'rc', 'rdf', 're', 'reg',
      'rest', 'resw', 'resx', 'rhtml', 'rjs', 'rprofile', 'rpy', 'rss', 'rst', 'ruby', 'rxml', 's',
      'sass', 'scala', 'scm', 'sconscript', 'sconstruct', 'script', 'scss', 'sgml', 'sh', 'sh',
      'shtml', 'sml', 'svn-base', 'sql', 'sql', 'sty', 'tcl', 'tex', 'textile', 'tld', 'tli',
      'tmpl', 'tpl', 'vb', 'vi', 'vim', 'vmg', 'webpart', 'wsp', 'wsdl', 'xhtml', 'xoml', 'xsd',
      'xslt', 'yaml', 'yaws', 'yml', 'zsh'
    ]
  },
  'css': {}, // we dont have the icon yet, but i believe we want it, snapping to 'code' for now
  'csv': { extensions: ['csv'] },
  'docset': {},
  'docx': { extensions: ['doc', 'docm', 'docx'] },
  'dotx': { extensions: ['dot', 'dotm', 'dotx'] },
  'email': { extensions: ['eml', 'msg', 'ost', 'pst'] },
  'exe': { extensions: ['application', 'appref-ms', 'apk', 'app', 'appx', 'exe', 'ipa', 'msi', 'xap'] },
  'folder': {},
  'font': { extensions: ['ttf', 'otf', 'woff'] },
  'genericfile': {},
  'html': { extensions: ['htm', 'html', 'mht'] },
  'link': { extensions: ['lnk', 'link', 'url', 'website', 'webloc'] },
  'listitem': { extensions: ['listitem'] },
  'model': {
    extensions: [
      '3ds', '3mf', 'blend', 'cool', 'dae', 'df', 'dwfx', 'dwg', 'dxf', 'fbx', 'glb', 'gltf', 'holo',
      'layout', 'max', 'off', 'ply', 'skp', 'stp', 'stl', 't', 'thl', 'x'
    ]
  },
  'mpp': { extensions: ['mpp'] },
  'mpt': { extensions: ['mpt'] },
  'odp': { extensions: ['odp'] },
  'ods': { extensions: ['ods'] },
  'odt': { extensions: ['odt'] },
  'one': { extensions: ['one', 'onepkg'] }, // this is a format for exported single-file notebook pages
  'onetoc': { extensions: ['ms-one-stub', 'onetoc', 'onetoc2'] }, // this icon represents a complete, logical notebook.
  'pdf': { extensions: ['pdf'] },
  'photo': {
    extensions: [
      'arw', 'bmp', 'cr2', 'crw', 'dcr', 'dds', 'dib', 'dng', 'erf', 'gif', 'ico', 'jfi', 'jfif', 'jif',
      'jpe', 'jpeg', 'jpg', 'kdc', 'mrw', 'nef', 'orf', 'pct', 'pict', 'png', 'pns', 'psd', 'raw', 'tga',
      'tif', 'tiff', 'wdp'
    ]
  },
  'potx': { extensions: ['pot', 'potm', 'potx'] },
  'ppsx': { extensions: ['pps', 'ppsm', 'ppsx'] },
  'pptx': { extensions: ['ppt', 'pptm', 'pptx'] },
  'pub': { extensions: ['pub'] },
  'spo': { extensions: ['aspx'] },
  'rtf': { extensions: ['epub', 'rtf', 'wri'] },
  'sharedfolder': {},
  'sysfile': {
    extensions: [
      'bak', 'bin', 'cab', 'cache', 'cat', 'cer', 'class', 'dat', 'db', 'dbg', 'dl_', 'dll', 'ithmb',
      'jar', 'kb', 'kdc', 'ldt', 'lrprev', 'ppa', 'ppam', 'pdb', 'rom', 'thm', 'thmx', 'vsl', 'xla',
      'xlam', 'xll'
    ]
  },
  'txt': { extensions: ['dif', 'diff', 'readme', 'out', 'plist', 'properties', 'text', 'txt'] },
  'vector': { extensions: ['ai', 'dgn', 'pd', 'emf', 'eps', 'indd', 'indt', 'ps', 'svg', 'svgz', 'wmf', 'oxps', 'xps', 'xd', 'sketch'] },
  'video': {
    extensions: ['3gp', 'asf', 'avi', 'dvr-ms', 'flv', 'm1v', 'm4v', 'mkv', 'mod', 'mov',
      'mm4p', 'mp2', 'mp2v', 'mp4', ' mpa', 'mpe', 'mpeg', 'mpg', 'mpv', 'mpv2', 'mts', 'ogg', 'qt',
      'swf', 'ts', 'vob', 'webm', 'wlmp', 'wm', 'wmv', 'wmx'
    ]
  },
  'vsdx': { extensions: ['vsd', 'vsdm', 'vsdx', 'vdw'] },
  'vssx': { extensions: ['vss', 'vssm', 'vssx'] },
  'vstx': { extensions: ['vst', 'vstm', 'vstx'] },
  'xlsx': { extensions: ['xls', 'xlsb', 'xlsm', 'xlsx'] },
  'xltx': { extensions: ['xlt', 'xltm', 'xltx'] },
  'xml': { extensions: ['xaml', 'xml', 'xsl'] },
  'xsn': { extensions: ['xsn'] },
  'zip': { extensions: ['zip'] }
};